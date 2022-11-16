import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/app';
import { PageError } from '@/pages/error/page-error';
import { PageEditDocument } from '@/pages/edit-document/page-edit-document';

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
        ],
      },
    ],
  },
]);
