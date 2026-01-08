export type Language = 'ID' | 'EN';

export interface ResumeData {
  ui: {
    nav: {
      profile: string;
      experience: string;
      education: string;
      achievements: string;
      skills: string;
    };
    header: {
      resume: string;
    };
    profile: {
      hello: string;
      downloadCv: string;
    };
    education: {
      gpa: string;
      thesis: string;
    };
    achievements: {
      awards: string;
      certifications: string;
    };
    skills: {
      hard: string;
      soft: string;
    };
  };
  profile: {
    name: string;
    role: string;
    phone: string;
    email: string;
    location: string;
    summary: string;
  };
  education: {
    institution: string;
    period: string;
    degree: string;
    gpa: string;
    thesis: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string[];
  }[];
  organization: {
    role: string;
    name: string;
    period: string;
    description: string[];
  }[];
  achievements: {
    title: string;
    institution: string;
    period: string;
    description: string;
  }[];
  certifications: {
    name: string;
    year: string;
  }[];
  skills: {
    soft: string[];
    hard: string[];
  };
}
