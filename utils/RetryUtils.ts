// 👉 Same concept as RetryAnalyzer in TestNG
export class RetryUtils {

  static async retry(action: () => Promise<void>, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        await action();
        return;
      } catch (error) {
        if (i === retries - 1) throw error;
      }
    }
  }
}