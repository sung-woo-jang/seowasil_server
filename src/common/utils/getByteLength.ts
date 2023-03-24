export function getByteLength(text: string): number {
  let byteLength = 0;

  // 문자열을 UTF-16 형식으로 인코딩하여 바이트 수 계산
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode <= 0xff) {
      byteLength += 1; // 1바이트 문자
    } else {
      byteLength += 2; // 2바이트 문자
    }
  }

  return byteLength;
}
