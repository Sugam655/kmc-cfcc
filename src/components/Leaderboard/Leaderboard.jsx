// import React from 'react';
// import './Leaderboard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMedal, faStar } from '@fortawesome/free-solid-svg-icons';

// const Leaderboard = () => {
//   const leaders = [
//     { rank: 1, name: 'Maria Sanchez', initials: 'MS', points: 3450, activities: 58, color: 'yellow' },
//     { rank: 2, name: 'Robert Johnson', initials: 'RJ', points: 2980, activities: 49, color: 'gray' },
//     { rank: 3, name: 'Emma Wilson', initials: 'EW', points: 2750, activities: 42, color: 'blue' },
//     { rank: 4, name: 'Liam Brown', initials: 'LB', points: 2600, activities: 39, color: 'green' },
//     { rank: 5, name: 'Olivia Davis', initials: 'OD', points: 2400, activities: 35, color: 'purple' }
//   ];

//   const getColorClass = (color) => {
//     const colors = {
//       yellow: 'color-yellow',
//       gray: 'color-gray',
//       blue: 'color-blue',
//       green: 'color-green',
//       purple: 'color-purple'
//     };
//     return colors[color] || 'color-gray';
//   };

//   const getRankIcon = (rank) => {
//     switch(rank) {
//       case 1: return <FontAwesomeIcon icon={faMedal} className="gold" />;
//       case 2: return <FontAwesomeIcon icon={faMedal} className="silver" />;
//       case 3: return <FontAwesomeIcon icon={faMedal} className="bronze" />;
//       default: return <FontAwesomeIcon icon={faStar} className="star" />;
//     }
//   };

//   return (
//     <section className="leaderboard-section">
//       <h2>Leaderboard</h2>
//       <div className="leaderboard-table">
//         {leaders.map((leader) => (
//           <div key={leader.rank} className="leader-row">
//             <div className={`leader-rank ${getColorClass(leader.color)}`}>
//               {getRankIcon(leader.rank)} {leader.rank}
//             </div>
//             <div className="leader-info">
//               <div className="leader-avatar">{leader.initials}</div>
//               <div className="leader-details">
//                 <span className="leader-name">{leader.name}</span>
//                 <span className="leader-activities">{leader.activities} activities</span>
//               </div>
//             </div>
//             <div className="leader-points">
//               <FontAwesomeIcon icon={faStar} /> {leader.points} pts
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Leaderboard;
