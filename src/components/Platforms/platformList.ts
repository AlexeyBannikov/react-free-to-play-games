import { IPlatformItem, PlatformPropertyEnum } from '@/redux/filter/types';

export const platformList: IPlatformItem[] = [
  { name: 'All Platforms', platformProperty: PlatformPropertyEnum.ALL },
  { name: 'Windows (PC)', platformProperty: PlatformPropertyEnum.PC },
  { name: 'Browser (Web)', platformProperty: PlatformPropertyEnum.BROWSER },
];
