/**
 * A simple function to convert markdown syntax to HTML
 * This is a very basic implementation and only handles simple markdown features
 */
export default function convertMarkdownToHTML(markdown: string): string {
    if (!markdown) {
        return '';
    }

    let html = markdown;

    // Convert headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold and italic
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Convert lists
    html = html.replace(/^\s*\* (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^\s*\d\. (.*$)/gim, '<ol><li>$1</li></ol>');

    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');

    // Convert line breaks
    html = html.replace(/\n/gim, '<br />');

    // Fix multiple consecutive list items (combine them in a single list)
    html = html.replace(/<\/ul>\s*<ul>/gim, '');
    html = html.replace(/<\/ol>\s*<ol>/gim, '');

    return html;
} 