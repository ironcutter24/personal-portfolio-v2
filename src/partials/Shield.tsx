import React from 'react';

// Unused, badge links are specified in markdown files
export const ShieldType = {
  ASEPRITE:
    'https://img.shields.io/badge/Aseprite-FFFFFF?style=flat&logo=Aseprite&logoColor=#7D929E',
  BLENDER:
    'https://img.shields.io/badge/Blender-%23F5792A.svg?style=flat&logo=blender&logoColor=white',
  CSHARP:
    'https://img.shields.io/badge/C%23-%23239120.svg?style=flat&logo=csharp&logoColor=white',
  FMOD: 'https://img.shields.io/badge/FMOD-0058D9?style=flat&logo=fmod&logoColor=#7D929E',
  GODOT:
    'https://img.shields.io/badge/Godot-%23FFFFFF.svg?style=flat&logo=godot-engine',
  UNITY:
    'https://img.shields.io/badge/Unity-%23000000.svg?style=flat&logo=unity&logoColor=white',
} as const;

type IShieldProps = {
  url: string;
};

const Shield: React.FC<IShieldProps> = ({ url }) => (
  <img
    style={{ float: 'left', margin: '6px 8px 6px 0px' }}
    src={`https://img.shields.io/badge/${url}`}
    alt="Shield Image"
  />
);

export { Shield };
