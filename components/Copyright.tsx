'use client'
import React from 'react';

import GetIcon from '@/utils/GetIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Copyright({
  resume
}: {
  resume: any;
}) {



  if (resume?.basics?.hideCopyRight) {
    return null;
  }
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isRemoved, setIsRemoved] = React.useState(false);

  function toggleRemoved() {
    console.log('toggleRemoved');
    setIsRemoved(true);
  }

  return (
    <div className={"max-w-2xl min-w-md grid grid-row-7 mb-2 nonprintable" + (isRemoved ? ' hidden' : '')} hidden={isRemoved}>
      <div className={"col-span-12 grid flex-row py-2 px-4 rounded-t-lg"}>
        <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
        </div>
          <div className="flex justify-between items-center text-grey-100">
          <h1 className="text-xs">made with <FontAwesomeIcon icon={GetIcon("Heart")} style={{ width: '1em' }} /> by <a className="text-blue-500" href="https://github.com/kuraykaraaslan/Resume" target="_blank">Resume</a></h1>

          
          </div>
        </div>
      </div>
    </div>
  );
}
