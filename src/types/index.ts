export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: LessonContent[];
}

export interface LessonContent {
  type: 'text' | 'image' | 'video' | 'quiz';
  data: any;
}
