import React, { useEffect, useState } from "react";
 import { Image } from "react-native";

export type Props = {
    uri: string;
    width?: number;
    height?: number;
};

const ScaledImage: React.FC<Props> = ({ uri, width, height }) => {

    const [widthState, setWidthState] = useState(0);
    const [heightState, setHeightState] = useState(0);

    useEffect(() => {
        Image.getSize(uri, (widthVar, heightVar) => {
            if (width && !height) {
                setWidthState(width);
                setHeightState(heightVar * (width / widthVar));
            } else if (!width && height) {
                setWidthState(widthVar * (height / heightVar));
                setHeightState(height);
            } else {
                setWidthState(widthVar);
                setHeightState(heightVar);
            }
        });
    } , []);

    return (
        <Image
            source={{ uri: String(uri) }}
            style={{ height: heightState, width: widthState }}
        />
    );
}

export default ScaledImage