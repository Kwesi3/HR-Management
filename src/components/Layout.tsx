import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Briefcase, Users, Calendar, FileText, Settings, Bell, LayoutDashboard } from 'lucide-react';

export const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Briefcase, label: 'Projects', path: '/projects' },
  { icon: Users, label: 'Employees', path: '/employees' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar items={navItems} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}