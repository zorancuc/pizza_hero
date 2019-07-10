import React from 'react';

import ActivityItem from './ActivityItem';

export default function Activities() {
  return (
    <div className="activity-items">
      <ActivityItem
        image="/sale-icon-with-bg.svg"
        timeStamp="22 Jan, 2019, 2:50am"
        detail={
          <div>
            You listed the{' '}
            <a href="view-item.html" className="activity-link">
              Gold Chest
            </a>{' '}
            for sale.
          </div>
        }
      />
      <ActivityItem
        image="/breed-icon-with-bg.png"
        timeStamp="21 Jan, 2019, 2:46am"
        detail={
          <div>
            You bred your hero{' '}
            <a href="view-character.html" className="activity-link">
              Tally the Bearicious
            </a>{' '}
            with{' '}
            <a href="view-character.html" className="activity-link">
              Tally the Bearicious
            </a>{' '}
            through a siring auction.{' '}
            <a href="/#" className="activity-link">
              Tally the Bearicious
            </a>{' '}
            should have a new bear cub soon!
          </div>
        }
      />
      <ActivityItem
        image="/request-icon-with-bg.svg"
        timeStamp="21 Jan, 2019, 2:46am"
        detail={
          <div>
            You requested to purchase{' '}
            <a href="view-character.html" className="activity-link">
              Mister Gunktruck
            </a>
            . Hope no one beats you to it!
          </div>
        }
      />
      <ActivityItem
        image="/open-chest-icon-with-bg.svg"
        timeStamp="21 Jan, 2019, 2:46am"
        detail={
          <div>
            You opened the{' '}
            <a href="view-item.html" className="activity-link">
              Gold Chest
            </a>
            !
          </div>
        }
      />
      <ActivityItem
        image="/closed-chest-icon-with-bg.svg"
        timeStamp="21 Jan, 2019, 2:46am"
        detail={
          <div>
            You bought the{' '}
            <a href="view-item.html" className="activity-link">
              Gold Chest
            </a>
            !
          </div>
        }
      />
      <ActivityItem
        image="/opened-egg-icon-with-bg.svg"
        timeStamp="21 Jan, 2019, 2:46am"
        detail={
          <div>
            You opened an{' '}
            <a href="/#" className="activity-link">
              Egg
            </a>
            !
          </div>
        }
      />
    </div>
  );
}
