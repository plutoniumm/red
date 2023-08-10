const rect = ( x, y, w, h, fill ) => `<rect x="${ x }" y="${ y }" width="${ w }" height="${ h }" fill="${ fill }" />`;

const binary_randoms = ( len ) => {
  const array = new Uint8Array( len );
  crypto.getRandomValues( array );
  for ( let i = 0;i < len;i++ ) {
    array[ i ] = array[ i ] % 2;
  };

  return array;
}

function generateImage ( values ) {
  var image = [];
  const px = 10;
  for ( let i = 0;i < values.length;i++ ) {
    for ( let j = 0;j < values[ 0 ].length;j++ ) {
      image.push(
        rect(
          px * i, px * j, px, px,
          values[ i ][ j ] ? "#000" : "#fff"
        )
      );
    };
  };

  return `<svg width="${ 2 * values.length }" height="${ 2 * values[ 0 ].length }">
    ${ image.join( "" ) }
  </svg>`;
};

function makeChessboard ( n ) {
  let values = [];
  // fill it with 0 and 1
  for ( let i = 0;i < n;i++ ) {
    const array = new Int8Array( n );
    for ( let j = 0;j < n;j++ ) {
      array[ j ] = ( i + j ) % 2;
    };
    values.push( array );
  };

  return generateImage( values );
};

const chessboard = makeChessboard( 50 );
const image = document.getElementById( "testsvg" );
image.innerHTML = chessboard;

const matrixDiff = ( matA, matB ) => {
  const arr = [];
  for ( let i = 0;i < matA.length;i++ ) {
    const subArr = new Int8Array( matA[ 0 ].length );
    for ( let j = 0;j < matA[ 0 ].length;j++ ) {
      subArr[ j ] = matA[ i ][ j ] - matB[ i ][ j ];
    };
    arr.push( subArr );
  };
  return diff;
};