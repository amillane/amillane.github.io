import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedBlog2 } from '../../interfaces/sanitized-config';

const BlogCard2 = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedBlog2[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100 mb-1" key={index}>
          <div className="p-8 h-full w-full flex flex-row items-center">
            <div className="avatar w-24 h-24 mask mask-squircle mr-4">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
            <div className="w-full">
              <h2>
                {skeleton({
                  widthCls: 'w-32',
                  heightCls: 'h-8',
                  className: 'mb-2',
                })}
              </h2>
              <div className="mt-2">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                })}
              </div>
              <div className="mt-2">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 mb-1 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click External Project', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full flex flex-row items-center">
          {item.imageUrl && (
            <div className="avatar w-24 h-24 mask mask-squircle mr-4">
              <LazyImage
                src={item.imageUrl}
                alt={'thumbnail'}
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: '',
                })}
              />
            </div>
          )}
          <div className="w-full">
            <h2 className="font-medium opacity-60 mb-2">{item.title}</h2>
            <p className="text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-4">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogCard2;
