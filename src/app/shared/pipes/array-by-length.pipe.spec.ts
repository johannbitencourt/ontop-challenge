import { ArrayByLengthPipe } from './array-by-length.pipe';

describe('ArrayByLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayByLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
