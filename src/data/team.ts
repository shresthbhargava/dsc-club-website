export interface TeamMember {
  id: string;
  name: string;
  department: string;
  role: string;
}

export const DEPARTMENTS = [
  "Panel",
  "Software Dev",
  "Technical",
  "Event Management",
  "Design",
  "Content",
  "PR & Outreach",
  "HR",
  "Social Media",
  "Photography",
] as const;

export type DepartmentName = (typeof DEPARTMENTS)[number] | "All Members";

export const teamData: TeamMember[] = [
  // PANEL (5)
  { id: "panel-01", name: "Divish Jain", department: "Panel", role: "President" },
  { id: "panel-02", name: "Kritika Maurya", department: "Panel", role: "Vice President" },
  { id: "panel-03", name: "Aman Panday", department: "Panel", role: "General Secretary" },
  { id: "panel-04", name: "Somya Tiwari", department: "Panel", role: "Joint Secretary" },
  { id: "panel-05", name: "Shriyash Sahu", department: "Panel", role: "Ops Manager" },

  // SOFTWARE DEV (11)
  { id: "swd-01", name: "Neel Pandey", department: "Software Dev", role: "Lead" },
  { id: "swd-02", name: "Aarush Rahul Patel", department: "Software Dev", role: "Co-Lead" },
  { id: "swd-03", name: "Sanskar", department: "Software Dev", role: "Co-Lead" },
  { id: "swd-04", name: "Nikhil Kumar Tiwari", department: "Software Dev", role: "Core Member" },
  { id: "swd-05", name: "Shresth Bhargava", department: "Software Dev", role: "Core Member" },
  { id: "swd-06", name: "Tanishka", department: "Software Dev", role: "Core Member" },
  { id: "swd-07", name: "Ritik", department: "Software Dev", role: "Core Member" },
  { id: "swd-08", name: "Varun Saini", department: "Software Dev", role: "Core Member" },
  { id: "swd-09", name: "Rajnarayan", department: "Software Dev", role: "Core Member" },
  { id: "swd-10", name: "Anish", department: "Software Dev", role: "Core Member" },
  { id: "swd-11", name: "Ananya", department: "Software Dev", role: "Core Member" },

  // TECHNICAL (11)
  { id: "tech-01", name: "Sumit Tripathi", department: "Technical", role: "Lead" },
  { id: "tech-02", name: "Abhishek Bochare", department: "Technical", role: "Core Member" },
  { id: "tech-03", name: "Sparsh Kapoor", department: "Technical", role: "Core Member" },
  { id: "tech-04", name: "Harshit Mohta", department: "Technical", role: "Core Member" },
  { id: "tech-05", name: "Divyanshi Adhikari", department: "Technical", role: "Core Member" },
  { id: "tech-06", name: "Monika Sahu", department: "Technical", role: "Core Member" },
  { id: "tech-07", name: "Parth Chopra", department: "Technical", role: "Core Member" },
  { id: "tech-08", name: "Anwesha Dhote", department: "Technical", role: "Core Member" },
  { id: "tech-09", name: "Mansi Kumari", department: "Technical", role: "Core Member" },
  { id: "tech-10", name: "Siddhi Dogne", department: "Technical", role: "Core Member" },
  { id: "tech-11", name: "Kuldeep", department: "Technical", role: "Core Member" },

  // EVENT MANAGEMENT (22)
  { id: "em-01", name: "Ayush Gupta", department: "Event Management", role: "Lead" },
  { id: "em-02", name: "Arunika Bag", department: "Event Management", role: "Co-Lead" },
  { id: "em-03", name: "Ashutosh Shrivastava", department: "Event Management", role: "Co-Lead" },
  { id: "em-04", name: "Divyansh Dhimole", department: "Event Management", role: "Core Member" },
  { id: "em-05", name: "Akshat Mujmer", department: "Event Management", role: "Core Member" },
  { id: "em-06", name: "Anshima", department: "Event Management", role: "Core Member" },
  { id: "em-07", name: "Nilesh Ugale", department: "Event Management", role: "Core Member" },
  { id: "em-08", name: "Ayush Ranjan", department: "Event Management", role: "Core Member" },
  { id: "em-09", name: "Prashant Dubey", department: "Event Management", role: "Core Member" },
  { id: "em-10", name: "Rakshit Yadav", department: "Event Management", role: "Core Member" },
  { id: "em-11", name: "Anushka Dubey", department: "Event Management", role: "Core Member" },
  {
    id: "em-12",
    name: "Bhawesh Kumar Gaut[FULL NAME TO BE CONFIRMED]",
    department: "Event Management",
    role: "Core Member",
  },
  { id: "em-13", name: "Sandeep Ganesh", department: "Event Management", role: "Core Member" },
  { id: "em-14", name: "Anvesha Agrawal", department: "Event Management", role: "Core Member" },
  { id: "em-15", name: "Satwik Singh", department: "Event Management", role: "Core Member" },
  { id: "em-16", name: "Anushka Sahu", department: "Event Management", role: "Core Member" },
  { id: "em-17", name: "Khushi Thakur", department: "Event Management", role: "Core Member" },
  { id: "em-18", name: "Krishna Nishad", department: "Event Management", role: "Core Member" },
  { id: "em-19", name: "Tejal Sharma", department: "Event Management", role: "Core Member" },
  { id: "em-20", name: "Abhinav Gomra", department: "Event Management", role: "Core Member" },
  { id: "em-21", name: "Siddhi Gupta", department: "Event Management", role: "Core Member" },
  { id: "em-22", name: "Salam Khan", department: "Event Management", role: "Core Member" },

  // DESIGN (8)
  { id: "des-01", name: "Pranjal Tiwari", department: "Design", role: "Lead" },
  { id: "des-02", name: "Aditya Pandey", department: "Design", role: "Co-Lead" },
  { id: "des-03", name: "Ishani Sahay", department: "Design", role: "Co-Lead" },
  { id: "des-04", name: "Saumya Dayal", department: "Design", role: "Core Member" },
  { id: "des-05", name: "Vaibhav Santosh Tiwari", department: "Design", role: "Core Member" },
  { id: "des-06", name: "Abhishek", department: "Design", role: "Core Member" },
  { id: "des-07", name: "Drishti Singh", department: "Design", role: "Core Member" },
  { id: "des-08", name: "Prisha Sharma", department: "Design", role: "Core Member" },

  // CONTENT (7)
  { id: "cnt-01", name: "Jihi Mamtani", department: "Content", role: "Lead" },
  { id: "cnt-02", name: "Anusha Singh Rajput", department: "Content", role: "Co-Lead" },
  { id: "cnt-03", name: "Shruti Mishra", department: "Content", role: "Core Member" },
  { id: "cnt-04", name: "Akshat Singh", department: "Content", role: "Core Member" },
  { id: "cnt-05", name: "Ananya Pandey", department: "Content", role: "Core Member" },
  { id: "cnt-06", name: "Bhavesh Wadhwani", department: "Content", role: "Core Member" },
  { id: "cnt-07", name: "Ashi Gupta", department: "Content", role: "Core Member" },

  // PR & OUTREACH (8)
  { id: "pr-01", name: "Shalini Pal", department: "PR & Outreach", role: "Lead" },
  { id: "pr-02", name: "Soumya Chouhan", department: "PR & Outreach", role: "Co-Lead" },
  { id: "pr-03", name: "Sousthab Mitra", department: "PR & Outreach", role: "Core Member" },
  { id: "pr-04", name: "Pranjal Bhatnagar", department: "PR & Outreach", role: "Core Member" },
  { id: "pr-05", name: "Anandita Sharma", department: "PR & Outreach", role: "Core Member" },
  { id: "pr-06", name: "Karan Kumar Gupta", department: "PR & Outreach", role: "Core Member" },
  { id: "pr-07", name: "Sivi Shrivastav", department: "PR & Outreach", role: "Core Member" },
  { id: "pr-08", name: "Vijval Singh", department: "PR & Outreach", role: "Core Member" },

  // HR (8)
  { id: "hr-01", name: "Aditya Saini", department: "HR", role: "Lead" },
  { id: "hr-02", name: "Vedant Patil", department: "HR", role: "Co-Lead" },
  { id: "hr-03", name: "Gargi Singh", department: "HR", role: "Core Member" },
  {
    id: "hr-04",
    name: "Swagatika Priyadarsh[FULL NAME TO BE CONFIRMED]",
    department: "HR",
    role: "Core Member",
  },
  { id: "hr-05", name: "Tanisha Sethi", department: "HR", role: "Core Member" },
  { id: "hr-06", name: "Mitali Pandey", department: "HR", role: "Core Member" },
  { id: "hr-07", name: "Aryan Awasthi", department: "HR", role: "Core Member" },
  { id: "hr-08", name: "Aryan Raj Mishra", department: "HR", role: "Core Member" },

  // SOCIAL MEDIA (18)
  { id: "sm-01", name: "Himesh Jham", department: "Social Media", role: "Lead" },
  { id: "sm-02", name: "Shalvi Pandey", department: "Social Media", role: "Co-Lead" },
  { id: "sm-03", name: "Pari Pancholiya", department: "Social Media", role: "Co-Lead" },
  { id: "sm-04", name: "Ankit Kumar Yadav", department: "Social Media", role: "Core Member" },
  { id: "sm-05", name: "Rudra Pratap Singh", department: "Social Media", role: "Core Member" },
  { id: "sm-06", name: "Sanidhya Raj", department: "Social Media", role: "Core Member" },
  { id: "sm-07", name: "Aarushi Raizada", department: "Social Media", role: "Core Member" },
  { id: "sm-08", name: "Utkarsh Agrawal", department: "Social Media", role: "Core Member" },
  { id: "sm-09", name: "Shrashti Bansal", department: "Social Media", role: "Core Member" },
  { id: "sm-10", name: "Indrayudh Paul", department: "Social Media", role: "Core Member" },
  { id: "sm-11", name: "Riddhima Gupta", department: "Social Media", role: "Core Member" },
  { id: "sm-12", name: "Aastha Sharma", department: "Social Media", role: "Core Member" },
  { id: "sm-13", name: "Dhanraj Choudhary", department: "Social Media", role: "Core Member" },
  { id: "sm-14", name: "Muskan Bhatia", department: "Social Media", role: "Core Member" },
  { id: "sm-15", name: "Abhinav Sharma", department: "Social Media", role: "Core Member" },
  { id: "sm-16", name: "Sohini Dutta", department: "Social Media", role: "Core Member" },
  { id: "sm-17", name: "Aashish", department: "Social Media", role: "Core Member" },
  { id: "sm-18", name: "N Nishchay Reddy", department: "Social Media", role: "Core Member" },

  // PHOTOGRAPHY (5)
  { id: "photo-01", name: "Prabhav Sharma", department: "Photography", role: "Lead" },
  { id: "photo-02", name: "Neha A", department: "Photography", role: "Core Member" },
  { id: "photo-03", name: "Vaishnavi Gupta", department: "Photography", role: "Core Member" },
  { id: "photo-04", name: "Prince Gupta", department: "Photography", role: "Core Member" },
  { id: "photo-05", name: "Parimal Vinod Swami", department: "Photography", role: "Core Member" },
];

export default teamData;

/**
 * Calculates card initials from the first letters of the first two words of a name.
 */
export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  const first = words[0]?.[0] ?? "";
  if (words.length === 1) return first.toUpperCase();
  const second = words[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

/**
 * Department color configuration mapping for UI styling
 */
export const DEPARTMENT_COLORS: Record<string, { borderColor: string; rgbGlow: string }> = {
  Panel: { borderColor: "#cbd5e1", rgbGlow: "203, 213, 225" },
  "Software Dev": { borderColor: "#38bdf8", rgbGlow: "56, 189, 248" },
  Technical: { borderColor: "#10b981", rgbGlow: "16, 185, 129" },
  "Event Management": { borderColor: "#f59e0b", rgbGlow: "245, 158, 11" },
  Design: { borderColor: "#818cf8", rgbGlow: "129, 140, 248" },
  Content: { borderColor: "#06b6d4", rgbGlow: "6, 182, 212" },
  "PR & Outreach": { borderColor: "#a855f7", rgbGlow: "168, 85, 247" },
  HR: { borderColor: "#ec4899", rgbGlow: "236, 72, 153" },
  "Social Media": { borderColor: "#f43f5e", rgbGlow: "244, 63, 94" },
  Photography: { borderColor: "#ff7849", rgbGlow: "255, 120, 73" },
};
