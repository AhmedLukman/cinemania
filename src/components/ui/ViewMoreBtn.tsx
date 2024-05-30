import { Button, Link } from '@nextui-org/react';
import React from 'react'

const ViewMoreBtn = ({path}: {path: string}) => {
  return (
    <Button
      as={Link}
      href={path}
      className="text-white"
      variant="bordered"
    >
      View more
    </Button>
  );
}

export default ViewMoreBtn