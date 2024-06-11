import React from 'react'

const ProfileParagraph = ({biography}: {biography: string}) => {
  return biography.split("\n").map((paragraph, index) => (
    <p key={index} className="text-gray-300 whitespace-normal mb-4">
      {paragraph}
    </p>
  ));
}

export default ProfileParagraph