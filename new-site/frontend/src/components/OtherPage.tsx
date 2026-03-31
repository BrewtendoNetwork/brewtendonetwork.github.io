'use client';

import { staffMembers } from '../data/staff';

export default function OtherPage() {
  return (
    <div className="style-center-div" style={{ padding: '20px 20px 32px' }}>
      <h2 style={{ margin: '8px 0 0', fontFamily: "'MarvelouzTubeFont3', sans-serif", fontSize: '24px' }}>
        Brewtendo Staff
      </h2>
      <hr />
      <div className="staff-grid">
        {staffMembers.map((member) => (
          <div
            key={member.name}
            className={`staff-member${member.name === 'Andrea' ? ' staff-easter-egg' : ''}`}
            title={member.name === 'Andrea' ? 'His uncle is the best' : undefined}
          >
            <img
              src={member.image}
              width="80"
              height="80"
              alt={member.name}
            />
            <span>{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
