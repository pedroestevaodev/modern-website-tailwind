import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
	return (
		<section className={`${styles.flexCenter} pb-14 my-4`}>
			<div className={`${styles.flexCenter} flex-wrap sm:gap-5 gap-10 w-full`}>
				{clients.map((client) => (
					<div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] sm:max-h-[45px] max-h-[30px]`}>
						<img src={client.logo} alt="client" className="sm:max-w-[192px] w-full h-full sm:min-h-[45px] min-h-[30px] sm:max-h-[45px] max-h-[30px] object-contain" />
					</div>
				))}
			</div>
		</section>
	)
}

export default Clients;