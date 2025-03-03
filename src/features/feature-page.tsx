import { ReactFeature } from "./components/react-feature";
import { ViteFeature } from "./components/vite-feature";

export const FeaturePage = () => {
  return (
    <>
      <div>
        <ViteFeature />
        <ReactFeature />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
