const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
    const mockThreadRepository =  new ThreadRepository();
    const mockReturnAddedThread = new AddedThread({
      id: 'dicoding',
      title: 'secret',
      owner: 'Dicoding Indonesia',
    });
    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));
    const useCase = new AddThreadUseCase({
      threadRepository : mockThreadRepository,
    });
    const useCasePayload={
      
      title: 'abc',
      body: 'body',
      owner: 'devi',
    };
  const expectedAddedThread = new AddedThread({
    id:'123',
    title:'title',
    owner:'devi'
  });
   const addThread = await useCase.execute(useCasePayload); 
    // Assert
    expect(AddedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayload);
  });
  
});
