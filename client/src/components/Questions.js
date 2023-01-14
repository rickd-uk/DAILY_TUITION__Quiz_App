import React, { useEffect, useState } from 'react'
import data from '../database/data'
import log from '../utils/output'

export default function Questions() {
	const [checked, setChecked] = useState(undefined)

	const questions = data[0]

	useEffect(() => {})

	const onSelect = () => {
		setChecked(true)
		log('radio btn change')
	}
	return (
		<div className='questions'>
			<h2 className='text-light'>{questions.question}</h2>
			<ul key={questions.id}>
				{questions.options.map((ques, idx) => (
					<li key={idx}>
						<input type='radio' value={false} name='options' id={`q${idx}-option`} onChange={onSelect} />

						<label className='text-primary' htmlFor={`q${idx}-option`}>
							{ques}
						</label>
						<div className='check'></div>
					</li>
				))}
			</ul>
		</div>
	)
}
