import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../data/team';
import Card from './Card';

interface TeamTreeNodeProps {
  member: TeamMember;
  isRoot?: boolean;
}

const TeamTreeNode: React.FC<TeamTreeNodeProps> = ({ member, isRoot = false }) => {
  const hasReports = member.reports && member.reports.length > 0;

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-12"
      >
        <Card
          hover={false}
          className={`${
            isRoot
              ? 'bg-gradient-to-br from-aa-blue-primary via-aa-cyan to-aa-blue-bright text-white shadow-2xl border-2 border-white w-full max-w-md mx-auto'
              : 'bg-white hover:shadow-xl border border-gray-100 w-full max-w-sm mx-auto'
          } transition-all duration-300`}
        >
          <div className="flex flex-col items-center text-center p-6">
            <div className="flex-shrink-0 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl overflow-hidden ${isRoot ? 'ring-4 ring-white/30' : 'ring-2 ring-aa-cyan/20'} shadow-lg`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`${isRoot ? 'w-32 h-32' : 'w-28 h-28'} object-cover`}
                />
              </motion.div>
            </div>

            <div>
              <h3 className={`${isRoot ? 'text-xl' : 'text-lg'} font-bold mb-2 ${isRoot ? 'text-white' : 'text-aa-primary-dark'}`}>
                {member.name}
              </h3>
              <p className={`text-sm font-semibold mb-3 ${isRoot ? 'text-blue-100' : 'text-aa-blue-primary'}`}>
                {member.role}
              </p>
              <p className={`text-sm leading-relaxed ${isRoot ? 'text-blue-50' : 'text-gray-600'}`}>
                {member.bio}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {hasReports && (
        <div className="relative w-full mt-4">
          <div className="absolute -top-12 left-1/2 w-0.5 h-8 bg-aa-blue-primary/30 -translate-x-1/2" />

          <div className="relative w-full px-4">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-aa-blue-primary/30" style={{
              left: `${(100 / member.reports!.length / 2)}%`,
              right: `${(100 / member.reports!.length / 2)}%`
            }} />

            <div className={`grid gap-6 pt-8 w-full ${
              member.reports!.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
              member.reports!.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
              member.reports!.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
            }`}>
              {member.reports!.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-aa-blue-primary/30 -translate-x-1/2" />

                  <TeamTreeNode member={report} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamTreeNode;
