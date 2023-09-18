'use strict'

const Homey = require('homey')

class MyApp extends Homey.App {

  onInit () {
    this.log('MyApp is running...')

    this._setupZigbeeDimFlowActionCards()
    this._setupZigbeeCctFlowActionCards()
    this._setupZigbeeRgbFlowActionCards()
  }

  _getDeviceTriggerCard(flowId) {
    const card = this.homey.flow.getDeviceTriggerCard(flowId)
    if (card) {
      return card
    }
    throw Error(`No ${flowId} device trigger card found`)
  }

  _getActionCard(flowId) {
    const card = this.homey.flow.getActionCard(flowId)
    if (card) return card
    throw Error(`No ${flowId} action card found`)
  }

  _setupZigbeeDimFlowActionCards() {
    this._levelStepActionCard = this._getActionCard('ZG_DIM_LIGHT_level_step_with_onoff')
    this._levelStepActionCard.registerRunListener((args, state) => {
      return args.device.levelStepRunListener(args, state)
    })

    this._levelMoveActionCard = this._getActionCard('ZG_DIM_LIGHT_level_move_with_onoff')
    this._levelMoveActionCard.registerRunListener((args, state) => {
      return args.device.levelMoveRunListener(args, state)
    })

    this._levelStopActionCard = this._getActionCard('ZG_DIM_LIGHT_level_stop_with_onoff')
    this._levelStopActionCard.registerRunListener((args, state) => {
      return args.device.levelStopRunListener(args, state)
    })

    this._recallSceneActionCard = this._getActionCard('ZG_DIM_LIGHT_recall_scene')
    this._recallSceneActionCard.registerRunListener((args, state) => {
      return args.device.recallSceneRunListener(args, state)
    })

    this._storeSceneActionCard = this._getActionCard('ZG_DIM_LIGHT_store_scene')
    this._storeSceneActionCard.registerRunListener((args, state) => {
      return args.device.storeSceneRunListener(args, state)
    })
  }

  _setupZigbeeCctFlowActionCards() {
    this._levelStepActionCard = this._getActionCard('ZG_CCT_LIGHT_level_step_with_onoff')
    this._levelStepActionCard.registerRunListener((args, state) => {
      return args.device.levelStepRunListener(args, state)
    })

    this._levelMoveActionCard = this._getActionCard('ZG_CCT_LIGHT_level_move_with_onoff')
    this._levelMoveActionCard.registerRunListener((args, state) => {
      return args.device.levelMoveRunListener(args, state)
    })

    this._levelStopActionCard = this._getActionCard('ZG_CCT_LIGHT_level_stop_with_onoff')
    this._levelStopActionCard.registerRunListener((args, state) => {
      return args.device.levelStopRunListener(args, state)
    })

    this._stepColorTemperatureActionCard = this._getActionCard(
      'ZG_CCT_LIGHT_step_color_temperature')
    this._stepColorTemperatureActionCard.registerRunListener((args, state) => {
      return args.device.stepColorTemperatureRunListener(args, state)
    })

    this._moveColorTemperatureActionCard = this._getActionCard(
      'ZG_CCT_LIGHT_move_color_temperature')
    this._moveColorTemperatureActionCard.registerRunListener((args, state) => {
      return args.device.moveColorTemperatureRunListener(args, state)
    })

    this._stopMoveStepActionCard = this._getActionCard(
      'ZG_CCT_LIGHT_stop_move_step')
    this._stopMoveStepActionCard.registerRunListener((args, state) => {
      return args.device.stopMoveStepRunListener(args, state)
    })

    this._recallSceneActionCard = this._getActionCard('ZG_CCT_LIGHT_recall_scene')
    this._recallSceneActionCard.registerRunListener((args, state) => {
      return args.device.recallSceneRunListener(args, state)
    })

    this._storeSceneActionCard = this._getActionCard('ZG_CCT_LIGHT_store_scene')
    this._storeSceneActionCard.registerRunListener((args, state) => {
      return args.device.storeSceneRunListener(args, state)
    })
  }

  _setupZigbeeRgbFlowActionCards() {
    this._moveHueActionCard = this._getActionCard(
      'ZG_COLOR_LIGHT_move_hue')
    this._moveHueActionCard.registerRunListener(async (args, state) => {
      return args.device.moveHueRunListener(args, state)
    })

    this._moveSaturationActionCard = this._getActionCard(
      'ZG_COLOR_LIGHT_move_saturation')
    this._moveSaturationActionCard.registerRunListener(async (args, state) => {
      return args.device.moveSaturationRunListener(args, state)
    })

    this._levelStepActionCard = this._getActionCard('ZG_COLOR_LIGHT_level_step_with_onoff')
    this._levelStepActionCard.registerRunListener((args, state) => {
      return args.device.levelStepRunListener(args, state)
    })

    this._levelMoveActionCard = this._getActionCard('ZG_COLOR_LIGHT_level_move_with_onoff')
    this._levelMoveActionCard.registerRunListener((args, state) => {
      return args.device.levelMoveRunListener(args, state)
    })

    this._levelStopActionCard = this._getActionCard('ZG_COLOR_LIGHT_level_stop_with_onoff')
    this._levelStopActionCard.registerRunListener((args, state) => {
      return args.device.levelStopRunListener(args, state)
    })

    this._stepColorTemperatureActionCard = this._getActionCard(
      'ZG_COLOR_LIGHT_step_color_temperature')
    this._stepColorTemperatureActionCard.registerRunListener((args, state) => {
      return args.device.stepColorTemperatureRunListener(args, state)
    })

    this._moveColorTemperatureActionCard = this._getActionCard(
      'ZG_COLOR_LIGHT_move_color_temperature')
    this._moveColorTemperatureActionCard.registerRunListener((args, state) => {
      return args.device.moveColorTemperatureRunListener(args, state)
    })

    this._stopMoveStepActionCard = this._getActionCard(
      'ZG_COLOR_LIGHT_stop_move_step')
    this._stopMoveStepActionCard.registerRunListener((args, state) => {
      return args.device.stopMoveStepRunListener(args, state)
    })

    this._recallSceneActionCard = this._getActionCard('ZG_COLOR_LIGHT_recall_scene')
    this._recallSceneActionCard.registerRunListener((args, state) => {
      return args.device.recallSceneRunListener(args, state)
    })

    this._storeSceneActionCard = this._getActionCard('ZG_COLOR_LIGHT_store_scene')
    this._storeSceneActionCard.registerRunListener((args, state) => {
      return args.device.storeSceneRunListener(args, state)
    })
  }

}

module.exports = MyApp
