const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000';

export const siteConfig = {
  url: SITE_URL,
  name: 'ANVAYA',
  title: 'ANVAYA | School Management ERP',
  longDescription:
    'ANVAYA is a centralized School Management Enterprise Resource Planning (ERP) system that connects academic, administrative, and financial operations.',
  shortDescription:
    'One Platform. One Campus. ANVAYA connects every school function into one unified system.',
  keywords: ['school management', 'ERP', 'education', 'school ERP'],
  author: 'ANVAYA Team',
} as const;
