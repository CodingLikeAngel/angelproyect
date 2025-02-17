// post.model.ts
export interface Imagen {
    url: string;
    mimeType: string;
    _id: string;
  }
  
  export interface Post {
    _id: string;
    title: string;
    content: string;
    author: string;
    descripcion: string;
    imagenes: Imagen[];
    category: string;
    authorInitials: string;
    tag: string;
    showCategoryOverlay: boolean;
    gradientFrom: string;
    gradientTo: string;
    badgeColor: string;
    badgeTextColor: string;
    createdAt: string;
    __v: number;
  }
  