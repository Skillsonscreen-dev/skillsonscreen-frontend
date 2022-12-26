let id = 1;

let sampleReadingContent = `
    <h1>Hello Bakers</h1>
    <h2>Start adding the ingredients to see some magic happen!</h2><br>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget rhoncus nisl. Pellentesque tristique nibh non orci pulvinar sodales. Pellentesque vitae facilisis elit, sed hendrerit justo. Vestibulum aliquet tincidunt urna quis facilisis. Mauris sit amet ex fringilla, ornare odio id, venenatis sem. Donec sodales, odio et fringilla aliquet, purus nibh sodales felis, sit amet suscipit nisl nibh nec enim. Nulla ultricies magna fermentum justo blandit ornare.
    </p>
    <br>
    <p>
        Curabitur eu pulvinar libero. Mauris efficitur, dolor eu imperdiet auctor, tortor odio lobortis diam, id egestas nulla libero vel nisl. In eu sollicitudin libero, eget pulvinar mauris. Cras posuere ultricies tristique. Sed a dapibus nibh. Sed semper tristique nulla non rutrum. Curabitur eleifend enim tellus, eu efficitur ligula cursus et. Vestibulum iaculis placerat odio non aliquam. Suspendisse a consectetur tortor. Nulla ac molestie elit, in volutpat urna. Cras nisl lacus, eleifend sed ligula a, pharetra varius leo. Aliquam porttitor enim justo, vel varius lacus lobortis et.
    </p>
`

export const lessons = [
    { length: 2, title: 'Types of Pastries', type: 'reading', seen: true, id: 0, current: false, content: sampleReadingContent},
    { length: 5, title: 'How to make Meat Pie', type: 'video', seen: true, id: 0, current: false, url: 'http://techslides.com/demos/sample-videos/small.webm'},
    { length: 10, title: 'How to make Sausage ', type: 'video', seen: true, id: 0, current: false, url: 'http://techslides.com/demos/sample-videos/small.webm'},
    { length: 5, title: 'How to make Puff-puff', type: 'video', seen: false, id: 0, current: false, url: 'http://techslides.com/demos/sample-videos/small.webm'},
    { length: 5, title: 'How to make Doughnuts', type: 'reading', seen: true, id: 0, current: false, content: sampleReadingContent}
]

const content = [
    { num: 1, id: 1, title: 'Types of Pastries ', completed: true, lessons: [ ...lessons ]},
    { num: 2, id: 2, title: 'How to make Meat Pie', completed: true, lessons: [ ...lessons ]},
    { num: 3, id: 3, title: 'How to make Sausage ', completed: false, lessons: [ ...lessons ]},
    { num: 4, id: 4, title: 'How to make Puff-puff', completed: false, lessons: [ ...lessons ]},
    { num: 5, id: 5, title: 'How to make Doughnuts', completed: false, lessons: [ ...lessons ]}
]

content.forEach(c => {
    c.lessons = c.lessons.map(l => { return { ...l, id: id++ }});
});

content[1].lessons[1].current = true;

export default content;