import * as React from 'react';
import styles from './TypeSpecimen.scss';

const TypeSpecimen = (props) => {
    return (
        <div>
            <div className={styles.section}>
                    <h1 className={styles.h1}>Header 1</h1>
                    <h2 className={styles.h2}>Header 2</h2>
                    <h3 className={styles.h3}>Header 3</h3>
                    <h4 className={styles.h4}>Header 4</h4>
                    <h5 className={styles.h5}>Header 5</h5>
                    <h6 className={styles.h6}>Header 6</h6>
                    <div>
                        <p className={styles.ParagraphLg}>Body Large</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphMd}>Body Medium</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphSm}>Body Small</p>
                    </div>
            </div>

            <div className={styles.section}>
                <h1 className={styles.section__header + " " + styles.h1}>Vimeo Typography</h1>

                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h1</h3>
                        <p className={styles.ParagraphMd}>Video Titles, Page Titles<br /> Helvetica Neue Medium (600)<br /> 36px</p>
                    </div>
                    <h1 className={styles.h1} style={{maxWidth: '780px'}}>Best Picture Oscar Nomination Title Sequence—2015</h1>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h2</h3>
                        <p className={styles.ParagraphMd}>Headlines<br /> Helvetica Neue Medium (500)<br /> 28px</p>
                    </div>
                    <h2 className={styles.h2}>Cecelia Bishop</h2>
                </div>
            </div>
            
             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h3</h3>
                        <p className={styles.ParagraphMd}>Section Titles<br /> Helvetica Neue Bold (600)<br /> 22px</p>
                    </div>
                    <h3 className={styles.h3}>Best Picture Oscar Nomination Title Sequence—2015</h3>
                </div>
            </div>

             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h4</h3>
                        <p className={styles.ParagraphMd}>Section Titles <br /> Helvetica Neue Bold (600)<br /> 18px</p>
                    </div>
                    <h4 className={styles.h4}>Trending Videos</h4>
                </div>
            </div>

             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h5</h3>
                        <p className={styles.ParagraphMd}>Usernames, Buttons<br /> Helvetica Neue Bold (600)<br /> 16px</p>
                    </div>
                    <h5 className={styles.h5}>Gabriel Harper</h5>
                </div>
            </div>

             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>h6</h3>
                        <p className={styles.ParagraphMd}>Usernames,Buttons<br /> Helvetica Neue Bold (700)<br /> 14px</p>
                    </div>
                    <h6 className={styles.h6}>Lillian Chapman</h6>
                </div>
            </div>

            
             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (large)</h3>
                        <p className={styles.ParagraphMd}>Body copy<br /> Helvetica Neue Regular (500)<br /> 16px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphLg}>I was always somebody who felt quite sorry for myself, what I had not got compared to my friends, how much of a struggle my life seemed to be compared to others. I was caught up in a web of negativity and needed someone or something to help me to escape.</p>
                    </div>
                </div>
             </div>

             <div className={styles.section}>
                <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (large alternative)</h3>
                        <p className={styles.ParagraphMd}>Body copy<br /> Helvetica Neue Regular (500)<br /> 16px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphLg + " " + styles.ParagraphAlt}>I was always somebody who felt quite sorry for myself, what I had not got compared to my friends, how much of a struggle my life seemed to be compared to others. I was caught up in a web of negativity and needed someone or something to help me to escape.</p>
                    </div>
                </div>
             </div>
             
             <div className={styles.section}>
                 <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (medium)</h3>
                        <p className={styles.ParagraphMd}>Descriptions<br /> Helvetica Neue Regular (500)<br /> 14px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                    </div>
                </div>
             </div>

             <div className={styles.section}>
                 <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (medium alt)</h3>
                        <p className={styles.ParagraphMd}>Descriptions<br /> Helvetica Neue Regular (500)<br /> 14px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphMd + " " + styles.ParagraphAlt}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                    </div>
                </div>
             </div>
             
             <div className={styles.section}>
                 <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (small strong)</h3>
                        <p className={styles.ParagraphMd}>Descriptions<br /> Helvetica Neue Regular (600)<br /> 12px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphSm}><strong>Jon Sheldrick</strong></p>
                    </div>
                </div>
             </div>


             <div className={styles.section}>
                 <div className={styles['type-chart']}>
                    <div className={styles['type-chart__desc']}>
                        <h3 className={styles.h3}>p (small alt)</h3>
                        <p className={styles.ParagraphMd}>Descriptions<br /> Helvetica Neue Regular (600)<br /> 12px</p>
                    </div>
                    <div>
                        <p className={styles.ParagraphMd + " " + styles.ParagraphAlt}>Created By</p>
                    </div>
                </div>
             </div>
             
             <div className={styles.section}>
                <h1 className={styles["section__header"] + " " + styles.h1}>Specimens</h1>
                
                <div className={styles.section__specimen}>
                    <h1 style={{maxWidth: '33.125rem'}} className={styles.h1}>Best Picture Oscar Nomination Title Sequence—2015</h1>
                    Lillian Chapman
                </div>

                <div className={styles.section__specimen}>
                    <h2 style={{maxWidth: '42.25rem'}} className={styles.h2}>The latest gear at NAB: Canon Compact Servo 70-200mm T4.4 lens & EOS C700p</h2>
                    <p className={styles.ParagraphMd}>14 followers</p>
                </div>

                <div className={styles.section__specimen}>
                    <h3 className={styles.h3}>From Staff Picks to Hollywood: Jordan Vogt-Roberts' journey</h3>
                    <p className={styles.ParagraphMd}>Robbie Junge</p>
                </div>

                <div className={styles.section__specimen}>
                    <h4 className={styles.h4}>Staff Pick Premiere: sit in the “Hot Seat” for your 18th!</h4>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                </div>

                <div className={styles.section__specimen}>
                    <h5 className={styles.h5}>Gabriel Harper</h5>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                </div>

                <div className={styles.section__specimen}>
                    <h6 className={styles.h6}>Lillian Chapman</h6>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                </div>

                <div className={styles.section__specimen}>
                    <h2 className={styles.h2}>Large Subtitle</h2>
                    <p className={styles.ParagraphMd}>There is no writing without the hand and everything that lies beyond the hand, all the architecture that weight on it, movies it – biology, geology, man's history. Writing is the tip of an enormous inverted pyramid.</p>
                </div>

                <div className={styles.section__specimen}>
                    <h5 style={{maxWidth: '12.5rem'}} className={styles.h6}>You’re Not Helpless (Anti-bullying PSA)</h5>
                    <p  className={styles.ParagraphMd}>The Duke</p>
                </div>
            </div>
             
   
        </div>
    );
};

export default TypeSpecimen;