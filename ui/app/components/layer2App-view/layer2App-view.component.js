import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
import MenuBar from '../menu-bar'
import Button from '../button'
import { DEPOSIT_LAYER2APP_ROUTE } from '../../routes'




//import TransactionViewBalance from '../transaction-view-balance'
//import TransactionList from '../transaction-list'

export default class Layer2AppView extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
    showDepositModal: PropTypes.func,
    history: PropTypes.object,
  }

  render () {
    const { t } = this.context
    const { history } = this.props
    return (
	<div className="transaction-view">
	<Button
      type="primary"
      className="layer2App-view__button"
      onClick={() => history.push(DEPOSIT_LAYER2APP_ROUTE)}
        >
        {t("depositLayer2App") }
      </Button>

      </div>
    )
  }
}

// const { showDepositModal, history } = this.props
// onClick={() =>{showDepositModal()} }
