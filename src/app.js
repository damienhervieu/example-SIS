import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

const App = () => (
  <Viewer full>
    <Entity
      name="Base de lancement d'Hammaguir"
      position={Cartesian3.fromDegrees(-2.8358333333333334, 31.0994444)}
      point={{ pixelSize: 20 }}
    />
    <Entity
      name="Wallops Flight Facility"
      position={Cartesian3.fromDegrees(-75.47944444444444, 37.8461111)}
      point={{ pixelSize: 20 }}
    />
    <Entity
      name="Cape Canaveral Air Force Station"
      position={Cartesian3.fromDegrees(-80.5586111111111, 28.4666667)}
      point={{ pixelSize: 20 }}
    />
    <Entity
      name="Vandenberg Air Force Base"
      position={Cartesian3.fromDegrees(-120.60111111111111, 34.7719444)}
      point={{ pixelSize: 20 }}
    />
  </Viewer>
);

export default hot(module)(App);
