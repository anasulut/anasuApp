import { cloneDeep } from 'lodash';

type VersionedData = {
  meta: { version: number };
  data: Record<string, unknown>;
};

const VERSION = 154;

async function migrate(originalVersionedData: VersionedData): Promise<VersionedData> {
  const versionedData = cloneDeep(originalVersionedData);
  versionedData.meta.version = VERSION;
  if (versionedData.data.QueuedRequestController) {
    delete versionedData.data.QueuedRequestController;
  }
  return versionedData;
}
