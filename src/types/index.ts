export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  joinDate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  endDate: string;
  assignedEmployees: string[];
  percentComplete: number;
  budget: number;
  department: string;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  assignedTo: string[];
  status: 'Not Started' | 'In Progress' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}