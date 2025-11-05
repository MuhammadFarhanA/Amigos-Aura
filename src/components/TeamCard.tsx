import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
  isCEO?: boolean;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, isCEO = false, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group ${isCEO ? 'col-span-full' : ''}`}
    >
      <div className={`relative overflow-hidden rounded-2xl ${
        isCEO
          ? 'bg-gradient-to-br from-aa-blue-primary via-aa-cyan to-aa-blue-bright shadow-2xl'
          : 'bg-white shadow-lg hover:shadow-2xl'
      } transition-all duration-500 ${isCEO ? 'p-8' : 'p-6'}`}>
        <div className={`flex ${isCEO ? 'flex-col md:flex-row' : 'flex-col'} items-center gap-6`}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className={`absolute inset-0 ${
              isCEO ? 'bg-white/20' : 'bg-aa-cyan/20'
            } rounded-full blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

            <div className={`relative ${
              isCEO
                ? 'w-40 h-40 md:w-48 md:h-48 ring-4 ring-white/50'
                : 'w-32 h-32 ring-2 ring-aa-cyan/30'
            } rounded-full overflow-hidden shadow-xl`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className={`${isCEO ? 'flex-1 text-center md:text-left' : 'text-center'}`}>
            <h3 className={`font-bold mb-2 ${
              isCEO
                ? 'text-2xl md:text-3xl text-white'
                : 'text-xl text-aa-primary-dark'
            }`}>
              {member.name}
            </h3>

            <div className={`inline-block px-4 py-1.5 rounded-full mb-4 ${
              isCEO
                ? 'bg-white/20 backdrop-blur-sm'
                : 'bg-gradient-to-r from-aa-blue-primary/10 to-aa-cyan/10 border border-aa-cyan/30'
            }`}>
              <p className={`text-sm font-semibold ${
                isCEO ? 'text-white' : 'text-aa-blue-primary'
              }`}>
                {member.role}
              </p>
            </div>

            <p className={`text-sm leading-relaxed ${
              isCEO ? 'text-blue-50 max-w-2xl' : 'text-gray-600'
            } ${isCEO && 'md:mx-0 mx-auto'}`}>
              {member.bio}
            </p>
          </div>
        </div>

        <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${
          isCEO ? 'bg-white/10' : 'bg-aa-cyan/5'
        } rounded-full blur-3xl`}></div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
