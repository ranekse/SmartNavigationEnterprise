// src/TagParser.ts

export const TagParser = {
    // Gelen etiketler arasında bizim aradığımız menü etiketi var mı diye bakar (True/False döner)
    hasMenu: (tags: string[] = [], menuTag: string): boolean => {
        return tags.includes(menuTag);
    },

    // 'group:production' gibi bir etiketi bulup, ':' işaretinden bölerek sadece 'production' kısmını alır
    getGroup: (tags: string[] = []): string | undefined => {
        // İçinde 'group:' ile başlayan etiketi bul
        const groupTag = tags.find(tag => tag.startsWith('group:'));

        // Eğer bulduysa ikiye böl (split) ve sağdaki kısmı (index 1) ver. Bulamadıysa tanımsız (undefined) dön.
        return groupTag ? groupTag.split(':')[1] : undefined;
    }
};
