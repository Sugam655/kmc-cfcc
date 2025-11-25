import React from 'react';

const Activities = () => {
  const activities = [
    {
      title: 'Community Cleanup',
      category: 'Parks & Public Spaces',
      description: 'Join local cleanup events to maintain cleanliness in public areas.',
      points: 150,
      icon: 'fas fa-tree',
      color: 'green'
    },
    {
      title: 'Report Infrastructure Issues',
      category: 'Public Works',
      description: 'Report potholes, broken streetlights, or other public infrastructure problems.',
      points: 75,
      icon: 'fas fa-exclamation-triangle',
      color: 'blue'
    },
    {
      title: 'Participate in Surveys',
      category: 'City Planning',
      description: 'Share your opinion on upcoming city projects and initiatives.',
      points: 50,
      icon: 'fas fa-vote-yea',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <section  className="activities" id="activities">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Available Activities</h2>
        <button className="text-primary-600 font-medium flex items-center group transition-colors duration-200">
          View All
          <i className="fas fa-chevron-right ml-1 transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className={`h-2 bg-gradient-to-r ${getColorClasses(activity.color)}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-sm ${getColorClasses(activity.color).split(' ')[2]} ${getColorClasses(activity.color).split(' ')[3]}`}>
                  <i className={activity.icon}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{activity.title}</h3>
                  <p className="text-gray-500 text-sm">{activity.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-yellow-500">
                  <i className="fas fa-coins mr-1"></i>
                  <span className="font-semibold">{activity.points} points</span>
                </div>
                <button className={`bg-gradient-to-r ${getColorClasses(activity.color)} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-sm hover:shadow-md`}>
                  {activity.title.includes('Report') ? 'Report' : activity.title.includes('Survey') ? 'Take Survey' : 'Participate'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;