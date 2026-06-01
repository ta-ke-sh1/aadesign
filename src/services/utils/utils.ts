
import DOMPurify from "dompurify";

export default class UtilsService {

    /**
     * Generates a random hexadecimal string.
     * @param length - The length of the hex string to generate.
     * @returns A random hex string of the specified length.
     */
    static generateRandomHex(length: number): string {
        if (length <= 0) {
            throw new Error("Length must be a positive integer");
        }

        const bytes = new Uint8Array(Math.ceil(length / 2));
        crypto.getRandomValues(bytes);

        const hex = Array.from(bytes, (b) =>
            b.toString(16).padStart(2, "0"),
        ).join("");
        return hex.slice(0, length);
    }

    /**
     * Sanitize string from html tags
     * @param str - String to sanitize
     * @returns A sanitized string
     */
    static sanitize(str: string) {
        return DOMPurify.sanitize(str);
    }
}
