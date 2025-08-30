// ===== CÁC HÀM RANDOM SỐ CHO DATA TEST =====

export class RandomDataGenerator {


    static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    static randomFloat(min: number, max: number, decimals: number = 2): number {
        const random = Math.random() * (max - min) + min;
        return parseFloat(random.toFixed(decimals));
    }


    static randomPhoneVN(): string {
        const prefixes = ['090', '091', '094', '083', '084', '085', '081', '082', '086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = this.randomInt(1000000, 9999999);
        return `${prefix}${suffix}`;
    }


    static randomId(length: number = 8): string {
        return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
    }





    static randomAge(min: number = 18, max: number = 65): number {
        return this.randomInt(min, max);
    }


    static randomDate(startDate: Date, endDate: Date): Date {
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();
        const randomTime = startTime + Math.random() * (endTime - startTime);
        return new Date(randomTime);
    }






    static randomFromArray<T>(array: T[]): T {
        return array[Math.floor(Math.random() * array.length)];
    }


    static randomEmail(domain?: string): string {
        const domains = domain ? [domain] : ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'test.com'];
        const selectedDomain = this.randomFromArray(domains);

        // Tạo username từ random string + số
        const username = Math.random().toString(36).substring(2, 10) + this.randomInt(100, 999);

        return `${username}@${selectedDomain}`;
    }

    // 12. Random email với prefix tùy chỉnh
    static randomEmailWithPrefix(prefix: string, domain: string = 'test.com'): string {
        const suffix = this.randomInt(1000, 9999);
        const timestamp = Date.now().toString().slice(-4); // Lấy 4 số cuối timestamp
        return `${prefix}_${suffix}_${timestamp}@${domain}`;
    }

    // 13. Random email theo format Việt Nam
    static randomEmailVN(): string {
        const firstNames = ['nguyen', 'tran', 'le', 'pham', 'hoang', 'huynh', 'vo', 'vu', 'dang', 'bui'];
        const lastNames = ['van', 'thi', 'minh', 'duc', 'anh', 'thu', 'ha', 'linh', 'nam', 'long'];

        const firstName = this.randomFromArray(firstNames);
        const lastName = this.randomFromArray(lastNames);
        const number = this.randomInt(1, 999);

        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
        const domain = this.randomFromArray(domains);

        return `${firstName}.${lastName}${number}@${domain}`;
    }
}

