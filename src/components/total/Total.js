import React from 'react'

const Total = ({ debet, credit, balance }) => (
		<section className="total">
			<header className="total__header">
				<h3>Баланс</h3>
				<p className="total__balance"> { balance } ₽</p>
			</header>
			<div className="total__main">
				<div className="total__main-item total__income">
					<h4>Доходы</h4>
					<p className="total__money total__money-income">
						+ { debet } ₽
					</p>
				</div>
				<div className="total__main-item total__expenses">
					<h4>Расходы</h4>
					<p className="total__money total__money-expenses">
						- { credit } ₽
					</p>
				</div>
			</div>
		</section>
	)
export default Total