import React from 'react';
import { BarChart, Users, Clock, DollarSign } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      icon: BarChart,
      label: 'Active Projects',
      value: '12',
      change: '+2.5%',
      trend: 'up',
    },
    {
      icon: Users,
      label: 'Total Employees',
      value: '284',
      change: '+3.2%',
      trend: 'up',
    },
    {
      icon: Clock,
      label: 'Avg. Project Duration',
      value: '45 days',
      change: '-1.5%',
      trend: 'down',
    },
    {
      icon: DollarSign,
      label: 'Budget Utilization',
      value: '87%',
      change: '+0.8%',
      trend: 'up',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            New Project
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Project Status</h3>
          {/* Add chart component here */}
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Department Overview</h3>
          {/* Add chart component here */}
        </div>
      </div>
    </div>
  );
}