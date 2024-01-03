'use client'
import React, { useRef, useEffect } from 'react';

import GetIcon from '@/utils/GetIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({
  children,
  title,
  url
}: {
  children: React.ReactNode;
  title: any;
  url: any;
}) {

  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isRemoved, setIsRemoved] = React.useState(false);

  const defClassName = "max-w-2xl min-w-md grid grid-row-7 mb-2 break-inside-avoid-page	";
  const selfRef = useRef(null);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  function toggleRemoved() {
    console.log('toggleRemoved');
    setIsRemoved(true);
  }



  return (
    <div className={defClassName + (isRemoved ? ' hidden' : '') } hidden={isRemoved} ref={selfRef}>
      <div className={"col-span-12 grid flex-row py-2 px-4 bg-gray-200 rounded-t-lg" + (isExpanded ? '' : ' rounded-b-lg')}>
        <div className="flex justify-between items-center bg-gray-200">
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-l font-bold">{title || 'Title'}</h1>
            {url ? <a className="text-sm text-gray-500" href={url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={GetIcon("External")} style={{ width: '1em' }} /></a> : ''}
          </div>
          <div className="flex justify-between items-center gap-2">
            <a className="text-sm text-gray-500" onClick={toggleRemoved}><FontAwesomeIcon icon={GetIcon("X")} style={{ width: '1em' }} /></a>
            <a className="text-sm text-gray-500" onClick={toggleExpanded}><FontAwesomeIcon icon={GetIcon(isExpanded ? 'CaretDown' : 'CaretUp')} style={{ width: '1em' }} /></a>
          </div>
        </div>
      </div>
      <div className={`col-span-12 ${isExpanded ? 'justify-center py-2 px-4 border-gray-200 items-center' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}
