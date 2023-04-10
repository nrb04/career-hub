import React from 'react';

const JobCard = ({jobcard}) => {
    const { id,company_logo,company_name } = jobcard;
    return (
        <div
  className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
>
  <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
    <div className="mt-16">
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {company_name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p>
    </div>
  </a>
</div>

    );
};

export default JobCard;