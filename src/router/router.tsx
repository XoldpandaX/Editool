import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/app';
import { PageError } from '@/pages/error/page-error';
import { PageEditDocument } from '@/pages/edit-document/page-edit-document';
import { PageLearning } from '@/pages/learning/page-learning';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        errorElement: <PageError />,
        children: [
          {
            path: 'file/:fileId',
            loader: async ({ params }) => {
              console.info(params);
            },
            element: <PageEditDocument />,
          },
          {
            path: 'learning',
            element: <PageLearning />,
          },
        ],
      },
    ],
  },
]);
