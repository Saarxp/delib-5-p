import React from 'react';
import SendIcon from '@/assets/icons/send-icon-pointing-up-and-right.svg?react';
import BackIcon from '@/assets/icons/chevronLeftIcon.svg?react';
import TwoColorButton from '@/view/components/buttons/TwoColorButton';

interface StepThreeViewSimilarStatementProps {
	viewSimilarStatement: { title: string; description: string };
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StepThreeViewSimilarStatement({
	viewSimilarStatement,
	setCurrentStep,
	setShowModal,
}: Readonly<StepThreeViewSimilarStatementProps>) {
	const handleSimilarStatementChosen = () => {
		setShowModal(false);
	};

	return (
		<>
			<h4 className='alertText'>
				One of the relevant statements from the given topic:
			</h4>

			<h4>{viewSimilarStatement.title}</h4>
			<p>{viewSimilarStatement.description}</p>

			<div className='twoButtonBox'>
				<TwoColorButton
					reverse={true}
					icon={BackIcon}
					text='back'
					textBackgroundColor='#fff'
					textColor='var(--dark-text)'
					iconBackgroundColor='var(--dark-blue)'
					onClick={() => setCurrentStep((prev) => prev - 1)}
				/>
				<TwoColorButton
					icon={SendIcon}
					text='Go vote on this statement'
					textBackgroundColor='#fff'
					textColor='var(--dark-text)'
					iconBackgroundColor='var(--dark-blue)'
					onClick={handleSimilarStatementChosen}
				/>
			</div>
		</>
	);
}
