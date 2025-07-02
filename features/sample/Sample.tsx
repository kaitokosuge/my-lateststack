import React from 'react';
import { fetchHello } from './fetchPosts';

export default async function Sample() {
    const { data, error } = await fetchHello();

    if (!data) {
        return (
            <div>
                {error === 404 ? (
                    <>URLが間違っております</>
                ) : (
                    error === 500 && <>時間をおいて再度訪問してください</>
                )}
            </div>
        );
    }

    console.log('json placeholderのデータ', data);
    return (
        <div className="text-white">
            <div>
                <>{data.title}</>
            </div>
        </div>
    );
}
