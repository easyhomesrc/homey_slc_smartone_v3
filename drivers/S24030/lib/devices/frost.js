'use strict'
const { CLUSTER, Cluster } = require('zigbee-clusters')
const { 
  getOptBaseTime
}                               = require('./utils');
module.exports = {  
  init(device){
    this.registerCapability(device);
  },
  registerCapability(device){ 

    if (!device.hasCapability('frost')) return

    device.registerCapability('frost', CLUSTER.THERMOSTAT, {
      get: 'frost', report: 'frost', reportParser: value => {

        device.log(`+++++++++ frost report `, value)
        return value || value === 'opened'

      }, getOpts: {
        getOnStart: true, 
        pollInterval: getOptBaseTime,  
        getOnOnline: true,
      },
      reportOpts: {
        configureAttributeReporting: {
          minInterval: 0,  
          maxInterval: 300,  
          minChange: 1,
        },
      },
    })

    device.registerCapabilityListener('frost', async value => {

      device.log(`frost set `, value)

      if (device.hasCapability('t7e_zg_thermostat_mode')){
        let cur_thermostat = device.getCapabilityValue('t7e_zg_thermostat_mode');
        if (cur_thermostat !== 'heat'){ 
          throw new Error('NOT In heating mode, FROST-protection cannot set.') 
        }
      }

       
      let payload = {}
      payload['frost'] = value
  
      device.log('======set frost payload : ', payload)

      device.thermostatCluster().writeAttributes(payload).catch(this.error)
       
       
    })  

  }  
} 