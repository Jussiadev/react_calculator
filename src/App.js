import React, {Component} from 'react';
import Total from './components/total/Total'
import History from './components/history/History'
import Operation from './components/operation/Operation'

class App extends Component {
	state = {
		transactions: [],
		description: '',
		amount: '',
		debet: 0,
		credit: 0,
		balance: 0
	}

	addTransaction = (add) => {
		const transactions = [...this.state.transactions,
			{
				id: `cmr${(+new Date).toString(16)}`,
				description: this.state.description,
				amount: this.state.amount,
				add
			}];

		this.setState({
			transactions,
			description: '',
			amount: ''
		})


		this.getBalance(add)
	}

	addAmount = (e) => {
		this.setState({
			amount: e.target.value
		})
	}

	addDescription = (e) => {
		this.setState({
			description: e.target.value
		})
	}

	getTotal = () => {
		this.setState({
			balance: this.state.debet - this.state.credit
		})
	}

	getBalance = (isAdd) => {
		if (isAdd) {
			this.setState({
				debet: +this.state.amount + this.state.debet
			}, () => this.getTotal())
		}
		else {
			this.setState({
				credit: +this.state.amount - this.state.credit
			}, () => this.getTotal())
		}
	}

	render() {
	  return (
		  <>
			  <header>
				  <h1>Кошелек</h1>
				  <h2>Калькулятор расходов</h2>
			  </header>

			  <main>
				  <div className="container">
					  <Total
					  	debet={this.state.debet}
						credit={this.state.credit}
						balance={this.state.balance}

					  />
					  <History
					  transactions={this.state.transactions}
					  />
					  <Operation
						  addTransaction={this.addTransaction}
						  addAmount={this.addAmount}
						  addDescription={this.addDescription}
						  description={this.state.description}
						  amount={this.state.amount}
					  />

				  </div>
			  </main>

		  </>
	  )
	}
}

export default App;
