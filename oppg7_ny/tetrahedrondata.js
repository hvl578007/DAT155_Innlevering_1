"use strict";

/**
 * Geometry and colors for the tetrahedron.
 */
class TetrahedronData {

    /**
     * Empty constructor.
     */
    constructor() {
    }

    /**
     * The vertices attribute.
     *
     * @returns {*[]}
     */
    get vertices() {
        return [
            /**
            vec4( -0.5, -0.5,  0.5, 1.0 ),
            vec4( -0.5,  0.5,  0.5, 1.0 ),
            vec4(  0.5,  0.5,  0.5, 1.0 ),
            vec4(  0.5, -0.5,  0.5, 1.0 ),
            vec4( -0.5, -0.5, -0.5, 1.0 ),
            vec4( -0.5,  0.5, -0.5, 1.0 ),
            vec4(  0.5,  0.5, -0.5, 1.0 ),
            vec4(  0.5, -0.5, -0.5, 1.0 )
            */

            vec4(-0.5, -0.5, 0.5, 1.0), //0
            vec4(0.0, 0.5, 0.0, 1.0), //1
            vec4(0.5, -0.5, 0.5, 1.0), //2
            vec4(0.1, -0.5, -0.5, 1.0) //3
        ];
    }

    /**
     * The colors attribute.
     *
     * @returns {*[]}
     */
    get colors() {
        return [
            [ 0.0, 0.0, 0.0, 1.0 ],  // black
            [ 1.0, 0.0, 0.0, 1.0 ],  // red
            [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
            [ 0.0, 1.0, 0.0, 1.0 ]  // green
            /**
            [ 0.0, 0.0, 1.0, 1.0 ],  // blue
            [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
            [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
            [ 1.0, 1.0, 1.0, 1.0 ]   // white
            */
        ];
    }

}

