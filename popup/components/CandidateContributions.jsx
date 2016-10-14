import React from 'react';
import Base from './Base';

import SegmentHeader from './SegmentHeader';


export default class CandidateContributions extends Base {
	render() {
		return (
			<div className='CandidateContributions'>
				<SegmentHeader title='Campaign Contribution'/>
				<div className='chart_container'/>
				<div className='row'>
					<div className='data_box right'>
						<div className='div_text'>
							$12 N
						</div>
					</div>
					<div className='data_box'>
						<div className='div_text'>
							Test123
						</div>
					</div>
					<div className='data_box left'>
						<div className='div_text'>
							as
						</div>
					</div>
				</div>
			</div>
		);
	}
}