package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.FuriganaDto;
import whale.dashboard.entity.Furigana;
import whale.dashboard.exception.FuriganaNotFoundException;
import whale.dashboard.repository.FuriganaRepository;
import whale.dashboard.repository.WordRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FuriganaService {

    private final WordRepository wordRepository;
    private final FuriganaRepository furiganaRepository;


    @Transactional
    public void registerFurigana(Long wordId, List<FuriganaDto.RegistrationRequest> requests) {
        List<Furigana> furiganaList = FuriganaDto.RegistrationRequest.toEntityList(wordId, requests, wordRepository);
        furiganaRepository.saveAll(furiganaList);
    }


    @Transactional
    public void modifyFurigana(List<FuriganaDto.ModifyRequest> requests) {
        for (FuriganaDto.ModifyRequest request : requests) {
            Furigana furigana = furiganaRepository.findById(request.getId())
                    .orElseThrow(() -> new FuriganaNotFoundException(request.getId()));

            furigana.change(request.getToken(), request.getReading());
        }
    }


    @Transactional
    public void removeFurigana(List<Long> FuriganaIdList) {
        for (Long furiganaId : FuriganaIdList) {
            Furigana furigana = furiganaRepository.findById(furiganaId)
                    .orElseThrow(() -> new FuriganaNotFoundException(furiganaId));

            furiganaRepository.delete(furigana);
        }
    }


    public Page<FuriganaDto.Response> findByWordId(Long wordId, Pageable pageable) {
        return furiganaRepository.findByWordId(wordId, pageable)
                .map(FuriganaDto.Response::of);
    }
}
