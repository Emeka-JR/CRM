export interface Task {
    id?: string; // Optional ID for Firebase
    title: string;
    description: string;
    dueDate: string;
    status: 'Pending' | 'In Progress' | 'Completed';
  }
  