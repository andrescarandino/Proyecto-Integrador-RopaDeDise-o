import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from '../styles/productDetail.module.css';

function ReservacionComponent() {
	const [dateRange, setDateRange] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	]);

	const [isCalendarOpen, setCalendarOpen] = useState(false);

	const handleSelect = (ranges) => {
		setDateRange([ranges.selection]);
	};

	const handleCalendarToggle = () => {
		setCalendarOpen(!isCalendarOpen);
	};

	const handleCloseCalendar = () => {
		setCalendarOpen(false);
	};

	return (
		<div className="custom-date-picker">
			<button
				type="button"
				className={styles.descriptionButton}
				onClick={handleCalendarToggle}
			>
				Abrir Calendario
			</button>
			{isCalendarOpen && (
				<div>
					<DateRangePicker
						ranges={dateRange}
						onChange={handleSelect}
						moveRangeOnFirstSelection={false}
					/>
					<button
						type="button"
						className={styles.descriptionButton}
						onClick={handleCloseCalendar}
					>
						Cerrar Calendario
					</button>
				</div>
			)}
		</div>
	);
}

export default ReservacionComponent;
