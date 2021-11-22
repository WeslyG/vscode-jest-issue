describe("Without decorator", () => {
  it("true must be true without decorator", () => {
    expect(true).toBe(true);
  });
});

@Describe("With decorator")
export class CommonTrueTest {
  @It("true must be true with decorator")
  trueTest() {
    expect(true).toBe(true);
  }
}
